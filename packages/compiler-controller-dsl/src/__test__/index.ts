import { compiler, IController } from '../';

const dsls: IController[] = compiler('packages');
console.log(dsls);
