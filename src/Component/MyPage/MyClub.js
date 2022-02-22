import ClubButton from './ClubButton';

const MyClub = ({ club }) => {
  console.log(club);
  return (
    <div className="club">
      <ClubButton img={club.img} />
      <div className="club-name">{club.name}</div>
      <div className="club-tags">
        {club.tags.map((tag, idx) => (
          <div className="club-tags-tag">
            <span className="club-tags-tag-text" key={idx}>
              {tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClub;
