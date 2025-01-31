interface ErrorMessageProps {
    message?: string;
  }

const ErrorMessage = ({message = "Something went wrong!"}: ErrorMessageProps) => {return (
    <div>
       <p>{message}</p> 
    </div>
);};

export default ErrorMessage;
