import PropTypes from "prop-types";

const TeamMember = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-36 h-42 square-full object-cover shadow-md"
      />
      <h3 className="mt-4 text-lg font-medium text-gray-800">{name}</h3>
      <p className="text-gray-500">{position}</p>
    </div>
  );
};

// Prop Validation
TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TeamMember;

  