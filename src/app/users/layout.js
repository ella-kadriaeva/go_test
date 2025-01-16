import UsersListNav from "../../components/UsersListNav/UsersListNav";
export default function UsersLayout({ children, params }) {
  const pathname = "/" + params.id?.join("/") || "/";
  return (
    <>
      <UsersListNav pathname={pathname} />
      <section>{children}</section>
    </>
  );
}
