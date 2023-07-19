export const createTaskTemplate = (task) => {
  const {} = task;

  // const DESCRIPTION = [
  //   "Изучить теорию",
  //   "Сделать домашку",
  //   "Пройти интенсив на соточку",
  // ];
  const color = ["black", "yellow", "blue", "green", "pink"];
  const date = `23 September`;
  const time = `16:15`;
  const isArchive = false;
  const isFavourite = false;

  const repeatClass = `card--repeat`;
  const deadlineClass = `card--deadline`;
  const archiveButtonInactiveClass = isArchive ? `` : `card__btn--disabled`;
  const favouriteButtonInactiveClass = isFavourite ? `` : `card__btn--disabled`;
// time lection: 02:29

  // const DEFAULT_COLOR = "black";

  // const task = {
  //   description: DESCRIPTION[2],
  //   dueDate: "18-07-2023",
  //   repeatingDays: {
  //     mo: true,
  //     tu: false,
  //     we: false,
  //     th: false,
  //     fr: false,
  //     sa: true,
  //     su: true,
  //   },
  //   color: color[1],
  //   isFavourite: true,
  //   isArchive: false,
  //   isDeadLine: false,
  // };

  return `
      <article class="card card--${color} ${repeatClass} ${deadlineClass}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive ${archiveButtonInactiveClass}">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites ${favouriteButtonInactiveClass}"
            >
              favorites
            </button>
          </div>
  
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
  
          <div class="card__textarea-wrap">
            <p class="card__text">Example task with default color.</p>
          </div>
  
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">23 September</span>
                    <span class="card__time">16:15</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
      `;
};
