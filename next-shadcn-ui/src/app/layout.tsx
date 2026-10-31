import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Nexus | Dashboard de proyectos", description: "Organiza proyectos, equipo y tareas en un solo espacio." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
