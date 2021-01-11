import catgory1 from '@/views/catgory/index'
import catgory2 from '@/views/catgory/index2'
import catgory3 from '@/views/catgory/index3'
import detail from '@/views/catgory/detail'

var catgoryRouter = [
  {
    path: "/catgory",
    redirect:"/catgory/cat=1",
  },
  {
    path: '/catgory/cat=1',
    name: 'catgory1',
    component: catgory1
  },
  {
    path: '/catgory/cat=2',
    name: 'catgory2',
    component: catgory2
  },
  {
    path: '/catgory/cat=3',
    name: 'catgory3',
    component: catgory3
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
];

export default catgoryRouter
