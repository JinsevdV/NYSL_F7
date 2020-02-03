
import HomePage from '../pages/home.vue';
import ClubsPage from '../pages/clubs.vue';
import ChatroomPage from '../pages/chatroom.vue';
import ContactPage from '../pages/contact.vue';
import NotFoundPage from '../pages/404.vue';
import GameInfoPage from '../pages/gameInfo.vue';
import AtlantaPage from '../pages/atlanta.vue';
import ChicagoPage from '../pages/chicago.vue';
import CincinnatiPage from '../pages/cincinnati.vue';
import ColoradoPage from '../pages/colorado.vue';
import ColumbusPage from '../pages/columbus.vue';
import DCunitedPage from '../pages/dcunited.vue';
import DallasPage from '../pages/dallas.vue';
import HoustonPage from '../pages/houston.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/gameInfo/',
    component: GameInfoPage,
  },
  {
    path: '/clubs/',
    component: ClubsPage,
  },
  {
    path: '/chatroom/',
    component: ChatroomPage,
  },
  {
    path: '/contact/',
    component: ContactPage,
  },
  {
    path: '/atlanta/:id/',
    component: AtlantaPage,
  },
  {
    path: '/chicago/:id/',
    component: ChicagoPage,
  },
  {
    path: '/cincinnati/:id/',
    component: CincinnatiPage,
  },
  {
    path: '/colorado/:id/',
    component: ColoradoPage,
  },
  {
    path: '/columbus/:id/',
    component: ColumbusPage,
  },
  {
    path: '/dcunited/:id/',
    component: DCunitedPage,
  },
  {
    path: '/dallas/:id/',
    component: DallasPage,
  },
  {
    path: '/houston/:id/',
    component: HoustonPage,
  },
  
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          
          
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
