import Button from "./Button";
import styles from "./InnerPage.module.scss";

function InnerPage() {
  return (
    <div className={styles.InnerPage}>
      <h1 className={styles.title}>Inner Page</h1>
      <Button large>large button</Button>
      <Button btnStyle="2">normal button</Button>
      <Button btnStyle="3">normal button</Button>
    </div>
  );
}

export default InnerPage;
