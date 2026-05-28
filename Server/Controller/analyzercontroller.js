import prisma from "../Config/db.js";

const Api = "https://api.github.com/users/";

export const SingleProfileAnalyze = async (req, res) => {
  const { username } = req.body;

  if (!username || typeof username !== "string" || username.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Valid username is required",
    });
  }

  try {
    const response = await fetch(Api + username);
    const data = await response.json();

    if (!response.ok) {
      return res.status(404).json({
        success: false,
        message: "GitHub user not found",
      });
    }

    const analyzedData = {
      githubId: data.id,
      username: data.login,
      name: data.name,
      bio: data.bio,
      avatarUrl: data.avatar_url,
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
      location: data.location,
      company: data.company,
       profileUrl: data.html_url,
    };

    const profile = await prisma.githubProfile.upsert({
      where: {
        username: analyzedData.username,
      },

      update: analyzedData,

      create: analyzedData,
    });

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getAllProfiles = async (req, res) => {
  try {
   
    const page = Math.max(parseInt(req.query.page) || 1, 1);

    const limit = Math.min(
      Math.max(parseInt(req.query.limit) || 10, 1),
      50
    );

    const skip = (page - 1) * limit;

    
    const [profiles, totalProfiles] = await Promise.all([
      prisma.githubProfile.findMany({
        skip,
        take: limit,

        select: {
          id: true,
          username: true,
          avatarUrl: true,
          followers: true,
          following: true,
          publicRepos: true,
          createdAt: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.githubProfile.count(),
    ]);

    return res.status(200).json({
      success: true,

      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalProfiles / limit),
        totalProfiles,
        limit,
      },

      data: profiles,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};