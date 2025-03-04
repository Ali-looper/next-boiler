import { Table } from "@/components/Table";
import AppLayout from "@/layouts/AppLayout";

export default function Home() {
  // const columns = [
  //   { key: "id", label: "ID" },
  //   { key: "name", label: "Name" },
  //   { key: "role", label: "Role" },
  //   { key: "email", label: "Email" },
  // ];

  // const data = [
  //   {
  //     id: 1,
  //     name: "Alice Johnson",
  //     role: "Manager",
  //     email: "alice@example.com",
  //   },
  //   { id: 2, name: "Bob Smith", role: "Developer", email: "bob@example.com" },
  //   {
  //     id: 3,
  //     name: "Charlie Brown",
  //     role: "Designer",
  //     email: "charlie@example.com",
  //   },
  // ];

  // const showIcons = {
  //   edit: true,
  //   delete: true,
  //   photos: true,
  //   download: true,
  // };
  return (
    <AppLayout>
      <div>
        {/* <Table columns={columns} data={data} showIcons={showIcons} /> */}
      </div>
    </AppLayout>
  );
}
