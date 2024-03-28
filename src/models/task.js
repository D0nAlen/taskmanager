export default class Task {
    constructor(data) {
        // this.id = data[`id`];
        // this.description = data[`description`] || ``;
        // this.dueDate = data[`due_date`] ? new Date(data[`due_date`]) : null;
        // this.repeatingDays = data[`repeating_days`];
        // this.color = data[`color`];
        // this.isFavorite = Boolean(data[`is_favorite`]);
        // this.isArchive = Boolean(data[`is_archive`]);

        this.id = data.id;
        this.description = data.description;
        this.dueDate = data.dueDate;
        this.repeatingDays = data.repeatingDays;
        this.color = data.color;
        this.isFavorite = data.isFavorite;
        this.isArchive = data.isArchive;
    }

    // 1)переделать!
    toRAW() {
        return {
            "id": this.id,
            "description": this.description,
            "due_date": this.dueDate ? this.dueDate.toISOString() : null,
            "repeating_days": this.repeatingDays,
            "color": this.color,
            "is_favorite": this.isFavorite,
            "is_archived": this.isArchive,
        };
    }

    static parseTask(data) {
        // console.log(data);
        return new Task(data);
    }

    static parseTasks(data) {
        // console.log(data);
        return data.map(Task.parseTask);
    }

    static clone(data) {
        return new Task(data.toRAW());
    }
}