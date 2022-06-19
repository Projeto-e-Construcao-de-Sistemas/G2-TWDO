import express from "express";
import taskController from "../controllers/TaskController";
import UserAuth from "../middlewares/UserAuth";

const router = express.Router();

/**
 * Create one Task to the logged user
 */
router.get("/", UserAuth.verifyJWT(), (req, res) =>
  res.status(200).send({ message: "tambem existe" })
);

/**
 * Create one Task to the logged user
 */
router.post("/", UserAuth.verifyJWT(), taskController.create());

/**
 * Update one Task of the logged user
 */
router.put("/:id", (req, res) =>
  //isCompleted: boolean;
  res.status(200).send({ message: "mais um q existe" })
);

/**
 * Delete one Task of the logged user
 */
router.delete("/:id", (req, res) =>
  res.status(200).send({ message: "deletado" })
);

export default router;
