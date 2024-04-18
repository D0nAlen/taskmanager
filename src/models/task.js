export default class Task {
    constructor(data) {
        this.id = data.id;
        this.description = data.description;
        this.dueDate = data.dueDate;
        this.repeatingDays = data.repeatingDays;
        this.color = data.color;
        this.isFavorite = data.isFavorite;
        this.isArchive = data.isArchive;
    }

    toRAW() {
        return {
            // "id": this.id,
            // "description": this.description,
            // "due_date": this.dueDate ? this.dueDate.toISOString() : null,
            // "repeating_days": this.repeatingDays,
            // "color": this.color,
            // "is_favorite": this.isFavorite,
            // "is_archived": this.isArchive,
            "id": this.id,
            "description": this.description,
            "dueDate": this.dueDate ? this.dueDate : null,
            "repeatingDays": this.repeatingDays,
            "color": this.color,
            "isFavorite": this.isFavorite,
            "isArchive": this.isArchive,
        };
    }

    static parseTask(data) {
        return new Task(data);
    }

    static parseTasks(data) {
        return data.map(Task.parseTask);
    }

    static clone(data) {
        return new Task(data.toRAW());
    }
}