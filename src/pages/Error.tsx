import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center ">
      <p className="text-8xl">{errorStatus}</p>
      <p className="text-3xl">{errorStatusText}</p>
      <Link
        to="/"
        className="mt-6 text-2xl text-blue-700 underline"
        replace={true}
      >
        Return back to Home
      </Link>
    </div>
  );
}
