import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErrors,
  getQueAnsDetails,
  newAnswer,
} from "../../redux/actions/quraAction";
import { DELETE_QUE_ANS_RESET, NEW_QUE_ANS_RESET } from "../../redux/Constants/quraConstants";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AnswerCard from "./AnswerCard";
import { motion } from "framer-motion";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const QuoraDetails = ({delay =0}) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { que, error } = useSelector((state) => state.queAnsDetails);

  const { success, error: answerError } = useSelector((state) => state.answer);


  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.queAnsdelete
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  const [comment, setComment] = useState("");

  const answerSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("comment", comment);
    myForm.set("queId", id);

    dispatch(newAnswer(myForm));

    setOpen(false);
  };

  const { id } = useParams();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (answerError) {
      toast.error(answerError);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Deleted Successfully");
      navigate("/qora");
      dispatch({ type: DELETE_QUE_ANS_RESET });
    }
    if (success) {
      toast.success("Answer Submitted Successfully");
      dispatch({ type: NEW_QUE_ANS_RESET });
    }
    dispatch(getQueAnsDetails(id));
  }, [dispatch, id, error, answerError, success , deleteError , isDeleted , navigate]);

  return (
    <section className="quraDetails">
      <motion.div
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay,
        }} className="quraDetail">
        <h1>Category : {que.title}</h1>
        <h2>Q.{que.question}</h2>

        <div>
          {que.answers &&
            que.answers.map((answer) => (
              <AnswerCard key={answer._id} answer={answer} />
            ))}
        </div>
        <div>Your answer.
          <Button variant="outlined" onClick={handleClickOpen}>
            Click Here...
          </Button>
          <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className="submitDialog"
      >
            <DialogTitle>{que.question}?</DialogTitle>
            <DialogContent >
              <DialogContentText>Write Your Answer here</DialogContentText>
              
              <textarea
                
                minRows={10}
                placeholder="Answer"
                className="submitDialogTextArea"
                onChange={(e) => setComment(e.target.value)}
              />
        
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">Cancel</Button>
              <Button onClick={answerSubmitHandler}color="primary">Submit</Button>
            </DialogActions>
            
          </Dialog>
        </div>
        

       
      </motion.div>
    </section>
  );
};

export default QuoraDetails;
