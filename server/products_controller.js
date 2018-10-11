module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { product_name, product_description, price, image_url } = req.body;

    dbInstance
      .create_product([product_name, product_description, price, image_url])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "It broke, owie." });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .read_product(params.id)
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: "It broke, oh no." });
        console.log(err);
      });
  },

  getAll: (req, res, next) => {
    const dbInstance = res.app.get("db");

    dbInstance
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "It broke, back to the dev cave!" });
        console.log(err);
      });
  },

  update: (req, res, next) => {
    const dbInstance = res.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_product([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops I did it again." });
        console.log(err);
      });
  },

  delete: (req, res, next) => {
    const dbInstance = res.app.get("db");
    const { params } = req;

    dbInstance
      .delete_product(params.id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
        console.log(err);
      });
  }
};
