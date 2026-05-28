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
    };

    const profile = await prisma.githubProfile.upsert({
      where: {
        username: analyzedData.username,
      },
    });

    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
