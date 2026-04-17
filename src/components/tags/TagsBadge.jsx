import React from "react";

const TagsBadge = ({tags}) => {
  return (
    <div className="flex gap-2">
      {tags.map((tag, index) => {
        const formattedTag =
          tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();

        return (
          <span
            key={index}
            className="badge badge-soft badge-success px-4 py-2 rounded text-sm"
          >
            {formattedTag}
          </span>
        );
      })}
    </div>
  );
};

export default TagsBadge;
