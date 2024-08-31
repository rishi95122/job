import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "@/components/Homepage/Homepage";

export default function Home() {
  return (
    <main className={styles.main}>
          <Homepage />
    </main>
  );
}
