const Router = require("koa-router");

const posts = require("./posts");
const comments = require("./comments");
const users = require("./users");
const subscriptions = require("./subscriptions");
const categoires = require("./category");

const router = new Router({
  prefix: "/api",
});

router.use(posts.routes());
router.use(comments.routes());
router.use(users.routes());
router.use(subscriptions.routes());
router.use(categoires.routes());

module.exports = router;
