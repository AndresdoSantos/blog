/* eslint-disable @next/next/no-img-element */

export function Image() {
  return (
    <div className="flex items-center justify-center border-2 border-cyan-500 h-[100px] w-[100px] rounded-full">
      <img
        src="https://github.com/AndresdoSantos.png"
        alt="Foto de Perfil"
        width={200}
        height={200}
        className="rounded-full h-[90px] w-[90px]"
      />
    </div>
  );
}
