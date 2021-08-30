export const removeItemById = (arr: any[], id: any) => arr.filter((val) => !val._id.equals(id));

export const updateItemById = (arr: any[], id: string) => arr.filter((val) => val._id == id);
