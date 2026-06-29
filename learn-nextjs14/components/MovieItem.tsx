"use client";

import Link from "next/link";
import styles from "./MovieItem.module.css";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  title: string;
  poster_path: string;
}

const MovieItem = ({ id, title, poster_path }: Props) => {
  const router = useRouter();

  return (
    <div key={id} className={styles.movie}>
      <img
        src={poster_path}
        alt={title}
        onClick={() => {
          router.push(`/movies/${id}`);
        }}
      />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
};

export default MovieItem;
