import styles from './TextLimit.module.scss';

const TextLimit = (props) => {
  const { cnt, limit } = props;

  return (
    <div className={styles.limit_wrap}>
      <div className={cnt > limit ? styles.limit_over : styles.limit_under}>
        {cnt} / {limit}
      </div>
    </div>
  );
};

export default TextLimit;
