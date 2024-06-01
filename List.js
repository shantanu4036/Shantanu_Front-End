import React, { useState, memo } from "react";
import PropTypes from "prop-types";
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
    return (
        <li
            style={{ backgroundColor: isSelected === index ? "green" : "red" }}
            onClick={() => {
                onClickHandler(index);
            }}
        >
            {text}
        </li>
    );
};

WrappedSingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.number,
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};
const SingleListItem = memo(WrappedSingleListItem);
const WrappedListComponent = ({ items }) => {
    const [selectedIndex, setSelectedIndex] = useState();

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <ul style={{ textAlign: "left" }}>
            {items.map((item, index) => (
                <SingleListItem
                    key={index}
                    onClickHandler={() => handleClick(index)}
                    text={item.text}
                    index={index}
                    isSelected={selectedIndex}
                />
            ))}
        </ul>
    );
};

WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
        })
    ),
};
WrappedListComponent.defaultProps = {
    items: [
        { text: "SOMNATH GIRI" },
        { text: "12011930" },
        { text: "FRONTEND" },
        { text: "STEELEYE LIMITED" },
    ],
};

const List = memo(WrappedListComponent);
export default List;
 