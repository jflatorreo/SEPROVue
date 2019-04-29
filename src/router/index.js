import boletin from '../components/boletin';
import RouteTwo from '../components/Sepro-what';

import home from '../components/home'
export default [
    // Redirects to /route-one as the default route.
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        // Children is just another route definition of sub-routes.
        children: [
            {
                // Note: No leading slash. This can trip people up sometimes.
                path: 'route-one-child',
                component: RouteTwo
            }
        ]
    },
    {
        // Route two takes the route parameter "id".
        // The parameter value can be accessed with $route.params.id in the RouteTwo component.
        path: '/boletin',
        component: boletin
    },
    {
        // Route two takes the route parameter "id".
        // The parameter value can be accessed with $route.params.id in the RouteTwo component.
        path: '/routetwo/:id',
        component: RouteTwo
    }
];