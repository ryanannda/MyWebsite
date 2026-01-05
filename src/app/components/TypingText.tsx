import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "UI/UX Designer",
  "Technology",
  "Engineering",
];

export default function TypingText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[index];

    // speed typing
    const speed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && subIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      }

      if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <span className="font-medium text-primary transition-opacity duration-300">
      {roles[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
