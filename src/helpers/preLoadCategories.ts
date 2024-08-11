import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
    name: string;
}

const categoriesToPreLoad: ICategory[] = [
    { name: 'Smartphones' },
    { name: 'MR' },
    { name: 'Ipads' },
    { name: 'Watches' },
    { name: 'AirPods' },
    { name: 'Speakers' },
    { name: 'Laptops' },
    { name: 'Televisions' },
    { name: 'Accessories' },
    { name: 'Keyboards' },
    { name: 'Computers' }
];

export const preLoadCategories = async () => {
    const categories = await CategoryRepository.find();
    if (!categories.length) await AppDataSource.createQueryBuilder().insert().into(Category).values(categoriesToPreLoad).execute();
    console.log('Categories preloaded');
}