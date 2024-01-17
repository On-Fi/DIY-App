import ProjectList from "@/components/ProjectList";

export default function FavoritesPage({
  projects,
  favorites,
  onToggleFavorite,
}) {
  const onlyFavoriteProjects = projects.filter((project) =>
    favorites.includes(project._id)
  );
  return (
    <>
      <h1>Your favorite projects</h1>
      <ProjectList
        projects={onlyFavoriteProjects}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      ></ProjectList>
      {onlyFavoriteProjects.length === 0 ? (
        <p>You do not have any favorite projects yet</p>
      ) : (
        ""
      )}
    </>
  );
}