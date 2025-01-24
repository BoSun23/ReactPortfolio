/**
 * @copyright 2025 Bo Sun
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import PropTypes from "prop-types";

const ratings = new Array(5);
ratings.fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL" 1'}
});

console.log(ratings);

const ReviewCard = (
    content,
    imgSrc,
    name,
    company
) => {
  return (
    <div>ReviewCard</div>
  )
}

ReviewCard.propTypes ={
    continue:PropTypes.string.isRequired,
    imgSrc:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    company:PropTypes.string.isRequired
}

export default ReviewCard