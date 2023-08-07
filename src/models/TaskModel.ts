class TaskModel {
    rowNumber: number;
    rowNames: string;
    rowDescription: string;
    rowStats: string;

    constructor(rowNumber: number,rowNames: string, rowDescription: string, rowStats: string) {
        this.rowNumber = rowNumber;
        this.rowNames = rowNames;
        this.rowDescription = rowDescription;
        this.rowStats = rowStats;
    }
}