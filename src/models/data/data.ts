import { ItemsInterface } from "../items/items.interface"
import { reactive } from "vue"
export const DataItems: ItemsInterface[] = reactive([
    {
        id: 1,
        name: "coffe",
        complate: false,
      },
      {
        id: 2,
        name: "pizza",
        complate: false,
      },
      {
        id: 3,
        name: "donuts",
        complate: false,
      },
      {
        id: 4,
        name: "noddles",
        complate: false,
      },
  ])