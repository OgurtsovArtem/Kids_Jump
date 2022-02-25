import Icon from "../Icon/Icon";
import "./ViewList.scss";

function ViewList({ className, list }) {
  return (
    <ul className={`${className} view-list`}>
      {list
        ? list.map((item, index) => {
            return (
              <li className="view-list__item" key={item.id}>
                <Icon className="view-list__icon" name="eye" />
                <p className="view-list__text">{item.text}</p>
              </li>
            );
          })
        : null}
    </ul>
  );
}

export default ViewList;
