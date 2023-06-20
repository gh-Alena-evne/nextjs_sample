import { IPurchaseItem } from '@bus/orders/typedefs';
import { IAllTrendingCollectionsItem, Product } from '@bus/product/typedefs';

export const nFormatter = (num: number) => {
  const newFormat = Math.abs(num) / 1000;

  return Math.abs(num) > 9999
    ? (Math.sign(num) * newFormat).toFixed(0) + 'k'
    : num;
};

export const formatToRound = (num: number) => {
  if (!isNaN(+num)) {
    return +num.toFixed(2);
  }

  return 0;
};

export const formatToUSLocale = (num: number) => {
  const dollarUSLocale = Intl.NumberFormat('en-US');

  return dollarUSLocale.format(num);
};

export const getFullNameCountryByCode = (code: string) => {
  const regionNames: Intl.DisplayNames = new Intl.DisplayNames(['en'], {
    type: 'region',
  });

  return regionNames.of(code);
};

export const getEndpointParams = (params: any) => {
  const urlParams = new URLSearchParams();

  Object.keys(params).map((key: string) => {
    return !!params[key] && urlParams.set(key, params[key]);
  });

  return decodeURIComponent(urlParams.toString());
};

export const getEndpointParams2 = (params: any, urlParams: URLSearchParams) => {
  Object.keys(params).forEach((key: string) => {
    if (params[key] instanceof Array && !!params[key].length) {
      return params[key].forEach((item: any) => {
        urlParams.append(key, item);
      });
    }
    if (params[key] && !Array.isArray(params[key])) {
      return urlParams.set(key, params[key]);
    }
  });

  return decodeURIComponent(urlParams.toString());
};

// use this for repeatable url params
export const arrayToUrlParams = (
  array: any[],
  params: URLSearchParams,
  key: string,
): URLSearchParams => {
  array.forEach((item: any) => {
    params.append(key, item);
  });

  return params;
};

export const getUrlExtension = (url: string) => {
  // @ts-ignore
  return url.split(/[#?]/)[0].split('.').pop().trim();
};

export const getFileFromUrl = async (imgUrl: string) => {
  const imgExt = getUrlExtension(imgUrl);
  const nameSplit = imgUrl.split('/');
  const name = nameSplit[nameSplit.length - 1].split('.')[0];

  const response = await fetch(imgUrl, {
    method: 'GET',
  });
  const blob = await response.blob();
  const file = new File([blob], `${name}.` + imgExt, {
    type: blob.type,
  });

  return {
    file,
    blob,
  };
};

export const getNewWidth = (
  width: number,
  height: number,
  maxHeight: number,
) => {
  const coefficient = height / maxHeight;

  return width / coefficient;
};

export const getNewAllCollectionData = (data: any) => {
  return data.map((item: IAllTrendingCollectionsItem) => {
    const shuffledItem = [...item.all_trending_product_collections]
      .map((product) => ({
        ...product,
        src: `/api/image/${product.rectangle_image.name}`,
      }))
      .sort(() => 0.5 - Math.random());

    return {
      ...item,
      all_trending_product_collections: shuffledItem,
    };
  });
};

export const getNewProductsData = (data: Product[]) => {
  return data.map((item: Product) => {
    return {
      ...item,
      src: `/api/image/${item.image.name}`,
    };
  });
};

export const getNewPurchasesData = (data: IPurchaseItem[]) => {
  return data.map((item: IPurchaseItem) => {
    return {
      ...item,
      src: `/api/image/${item.product.image.name}`,
    };
  });
};

export const getNewSingleCollectionData = (data: any) => {
  return data.map((item: any) => {
    return {
      ...item.product,
      src: `/api/image/${item.product?.image.name}`,
    };
  });
};

export const getNewTrendingCollectionData = (data: any) => {
  return data.map((item: any) => {
    const shuffledItem = [...item.trending_product_collections]
      .map((product) => ({
        ...product,
        src: `/api/image/${product.image.name}`,
      }))
      .sort(() => 0.5 - Math.random());

    return {
      ...item,
      trending_product_collections: shuffledItem,
    };
  });
};

export const getNewCollectionsData = (data: any) => {
  return data.map((item: any) => {
    const shuffledItem = [...item.product_collections]
      .map((product) => ({
        ...product,
        src: `/api/image/${product.image.name}`,
      }))
      .sort(() => 0.5 - Math.random());

    return {
      ...item,
      product_collections: shuffledItem,
    };
  });
};

export const getNewUserCollectionsData = (data: any) => {
  return data.map((item: any) => {
    const shuffledItem = [...item.user_collections_products]
      .map((product) => ({
        ...product,
        src: `/api/image/${product.image.name}`,
      }))
      .sort(() => 0.5 - Math.random());

    return {
      ...item,
      user_collections_products: shuffledItem,
    };
  });
};
export const getNewUserCollectionData = (data: any) => {
  return data.map((product: any) => ({
    ...product,
    src: `/api/image/${product.image.name}`,
  }));
};

export const getNewAccountSingleCollectionData = (data: any) => {
  return data.map((item: any) => {
    return {
      ...item,
      product: {
        ...item.product,
        src: `/api/image/${item.product.image.name}`,
      },
    };
  });
};
