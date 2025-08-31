import PropTypes from 'prop-types';

export const WaveSeparator = ({ flip = false, color = '#ffffff', backGroundColor = 'bg-white', imageUrl = '' }) => {

    const patternId = `wave-pattern-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-20 ${backGroundColor}`}
      >
        <defs>
          {imageUrl && (
            <pattern
              id={patternId}
              patternUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <image
                href={imageUrl}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          )}
        </defs>
        <path
          d="M0,60 C600,150 600,0 1600,100 L1200,0 L0,0 Z"
          fill={imageUrl ? `url(#${patternId})` : color}
        />
      </svg>
    </div>
  );
};

WaveSeparator.propTypes = {
  flip: PropTypes.bool,
  color: PropTypes.string,
  backGroundColor: PropTypes.string,
  imageUrl: PropTypes.string,
};
