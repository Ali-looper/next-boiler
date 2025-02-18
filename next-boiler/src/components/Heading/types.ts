export interface HeadingProps {
  level?: "h1" | "h2" | "h3" | "h4" | "h5";
  weight?: "bold" | "regular";
  className?: string;
  children: React.ReactNode;
}
