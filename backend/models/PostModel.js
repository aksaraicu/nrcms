import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Post = db.define(
  "nb_posts",
  {
    judul: DataTypes.STRING,
    isi: DataTypes.TEXT,
    gambar: DataTypes.STRING,
    kategori: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Post;

(async () => {
  await db.sync();
})();
