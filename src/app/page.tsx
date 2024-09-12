import styles from './page.module.css';  // Importa como um objeto de classes

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Header</div>
      <div className={styles.content}>
        <div className={styles.col1}>
          <div className={styles.hero}>Hero</div>
          <div className={styles.sidebar}>Sidebar</div>
        </div>
        <div className={styles.col2}>
          <div className={styles.mainContent}>Main Content</div>
          <div className={styles.extraContent}>Extra Content</div>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.relatedImages}>Related Images</div>
        <div className={styles.relatedPosts}>Related Posts</div>
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}
