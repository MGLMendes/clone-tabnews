import { Banner } from "@primer/react";
import DefaultLayout from "interface/DefaultLayout";

export default function confirmRegisterPage() {
  return (
    <DefaultLayout
      contentWidth="small"
      metadata={{
        title: "Confirme seu email",
      }}
    >
      <Banner
        variant="warning"
        title="Falta só uma etapa!"
        description="Abra o email enviado pelo SiegeNews e clique no link"
      />
    </DefaultLayout>
  );
}
