import PropTypes from 'prop-types';
import Note from "../../assets/nota-tangerine.svg?react";

export const ModalitiesCard = ({ title, paragraph }) => {
  return (
    <div className="col-span-4 card-spin">
        <Note className="w-3/4 m-auto" />
        <div className="w-1/2 content-card">
            <h4 className="text-orange font-bold text-5xl w-full text-center mb-2">{ title }</h4>
            <p className="text-white font-bold text-2xl w-full text-center">{ paragraph }</p>
        </div>
    </div>
  )
}

ModalitiesCard.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string
}
