import profilePicture from "@assets/images/profile-picture.webp";

export function ProfilePicture({ alt }: { alt: string }) {
  return (
    <img
      src={profilePicture.src}
      alt={alt}
      className="h-24 w-24 rounded-2xl transition-all duration-400 hover:h-52 hover:w-52"
    />
  );
}
