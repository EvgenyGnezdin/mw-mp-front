
export const pathsPublic: { [k: string]: string } = {
  home: "/",
  login: "/login",
  productDetails: "/product/:idOrSlug"
}

export const pathsPrivate: { [k: string]: string } = {
  accountSettings: "/account-settings"
}
//Метод собирает публичный и приватные пути в один общий объект.
export const paths: { [k: string]: string } = Object.assign({}, pathsPublic, pathsPrivate)


export const checkPathMatch = (
  pathname: string,
  //Объект с ключами 
  paths: { [k: string]: string}
) => {
  let isMatch = false
  //Берет ключи объекта paths и переводит их в массив map() возвращает массив значений.
  const allPaths = Object.keys(paths).map((k) => paths[k])

  const pathsFirstSection = pathname.split('/')[1]
  allPaths.forEach((p) => {
    if(p.slice(1) === pathsFirstSection) isMatch = true
  })
  
  return isMatch
}