import whiteLogo from '../../assets/logo/logo-white.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Slogan from '../../components/Slogan';

export default function Register() {
  return (
    <>
      <Slogan />
      <Header
        theme="flex p-4 justify-between bg-blue_main items-center"
        buttonText="Entrar"
        buttonHref="/login"
        logo={whiteLogo}
        buttonColor="bg-blue_lightest py-2 px-4 rounded-lg text-blue_main"
      />
      <div className="w-full flex flex-col px-4 py-8 pb-16 gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-center text-xl font-bold text-blue_dark">
            Cadastre-se
          </h1>
          <span className="text-neutral-800 text-base text-center">
            Cadastre-se aqui e encontre sua sorte hoje
          </span>
        </div>
        <form className="w-full flex flex-col gap-3 items-center">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
          />
          <fieldset className="flex gap-4">
            <input
              type="text"
              name="state"
              placeholder="Estado"
              className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
            />
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
            />
          </fieldset>
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full text-white bg-blue_main rounded-lg py-4"
          >
            Criar conta
          </button>
        </form>
        <button
          type="button"
          className="w-full text-neutral-700 bg-neutral-200 rounded-lg py-4"
        >
          Cadastrar com o Google
        </button>
        <p className="text-center text-neutral-700">
          Já tem uma conta?{' '}
          <a href="/login" className="block font-bold">
            Faça login aqui.
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}