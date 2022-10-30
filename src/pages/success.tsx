import Image from "next/image";
import { GetServerSideProps } from "next";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";

interface SuccessProps {
  customer: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Success({ customer, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop | Compra efetuada</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={135}
            height={145}
          />
        </ImageContainer>

        <p>
          UHHHUUUU!!! Parabéns, <strong>{customer}</strong>! Sua{" "}
          <strong>{product.name}</strong> já está a caminho da sua casa!
        </p>

        <Link href={"/"}>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = `${query.session_id}`;

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customer = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  console.log(session.line_items.data[0].price.product);

  return {
    props: {
      customer,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
