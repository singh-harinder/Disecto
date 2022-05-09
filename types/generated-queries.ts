import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from "@apollo/client/cache";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars["String"]>;
  aspect_ratio?: InputMaybe<Scalars["String"]>;
  background?: InputMaybe<Scalars["String"]>;
  border?: InputMaybe<Scalars["String"]>;
  color?: InputMaybe<Scalars["String"]>;
  color_space?: InputMaybe<Scalars["String"]>;
  crop?: InputMaybe<Scalars["String"]>;
  default_image?: InputMaybe<Scalars["String"]>;
  delay?: InputMaybe<Scalars["String"]>;
  density?: InputMaybe<Scalars["String"]>;
  dpr?: InputMaybe<Scalars["String"]>;
  effect?: InputMaybe<Scalars["String"]>;
  fetch_format?: InputMaybe<Scalars["String"]>;
  flags?: InputMaybe<Scalars["String"]>;
  format?: InputMaybe<Scalars["String"]>;
  gravity?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["String"]>;
  opacity?: InputMaybe<Scalars["String"]>;
  overlay?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["String"]>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: InputMaybe<Scalars["String"]>;
  quality?: InputMaybe<Scalars["String"]>;
  radius?: InputMaybe<Scalars["String"]>;
  transformation?: InputMaybe<Scalars["String"]>;
  underlay?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["String"]>;
  x?: InputMaybe<Scalars["String"]>;
  y?: InputMaybe<Scalars["String"]>;
  zoom?: InputMaybe<Scalars["String"]>;
};

export type CloudinaryImage_File = {
  __typename?: "CloudinaryImage_File";
  encoding?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  mimetype?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  publicUrl?: Maybe<Scalars["String"]>;
  publicUrlTransformed?: Maybe<Scalars["String"]>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  enableSessionItem: Scalars["Boolean"];
  enableSignout: Scalars["Boolean"];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsHash?: Maybe<Scalars["String"]>;
  fieldMeta?: Maybe<Scalars["JSON"]>;
  isOrderable: Scalars["Boolean"];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars["String"];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars["String"];
  viewsHash: Scalars["String"];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars["ID"];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  description?: Maybe<Scalars["String"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars["Boolean"];
  hideDelete: Scalars["Boolean"];
  initialColumns: Array<Scalars["String"]>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"];
  itemQueryName: Scalars["String"];
  key: Scalars["String"];
  label: Scalars["String"];
  labelField: Scalars["String"];
  listQueryName: Scalars["String"];
  pageSize: Scalars["Int"];
  path: Scalars["String"];
  plural: Scalars["String"];
  singular: Scalars["String"];
};

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  direction: KeystoneAdminUiSortDirection;
  field: Scalars["String"];
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  /**  Create a single Product item.  */
  createProduct?: Maybe<Product>;
  /**  Create a single ProductImage item.  */
  createProductImage?: Maybe<ProductImage>;
  /**  Create multiple ProductImage items.  */
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Create multiple Product items.  */
  createProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Create a single Review item.  */
  createReview?: Maybe<Review>;
  /**  Create multiple Review items.  */
  createReviews?: Maybe<Array<Maybe<Review>>>;
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single Product item by ID.  */
  deleteProduct?: Maybe<Product>;
  /**  Delete a single ProductImage item by ID.  */
  deleteProductImage?: Maybe<ProductImage>;
  /**  Delete multiple ProductImage items by ID.  */
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Delete multiple Product items by ID.  */
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Delete a single Review item by ID.  */
  deleteReview?: Maybe<Review>;
  /**  Delete multiple Review items by ID.  */
  deleteReviews?: Maybe<Array<Maybe<Review>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars["Boolean"];
  /**  Update a single Product item by ID.  */
  updateProduct?: Maybe<Product>;
  /**  Update a single ProductImage item by ID.  */
  updateProductImage?: Maybe<ProductImage>;
  /**  Update multiple ProductImage items by ID.  */
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Update multiple Product items by ID.  */
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Update a single Review item by ID.  */
  updateReview?: Maybe<Review>;
  /**  Update multiple Review items by ID.  */
  updateReviews?: Maybe<Array<Maybe<Review>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateProductArgs = {
  data?: InputMaybe<ProductCreateInput>;
};

export type MutationCreateProductImageArgs = {
  data?: InputMaybe<ProductImageCreateInput>;
};

export type MutationCreateProductImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductImagesCreateInput>>>;
};

export type MutationCreateProductsArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductsCreateInput>>>;
};

export type MutationCreateReviewArgs = {
  data?: InputMaybe<ReviewCreateInput>;
};

export type MutationCreateReviewsArgs = {
  data?: InputMaybe<Array<InputMaybe<ReviewsCreateInput>>>;
};

export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};

export type MutationCreateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersCreateInput>>>;
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteProductImageArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteProductImagesArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteProductsArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteReviewArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteReviewsArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationUpdateProductArgs = {
  data?: InputMaybe<ProductUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateProductImageArgs = {
  data?: InputMaybe<ProductImageUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateProductImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductImagesUpdateInput>>>;
};

export type MutationUpdateProductsArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductsUpdateInput>>>;
};

export type MutationUpdateReviewArgs = {
  data?: InputMaybe<ReviewUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateReviewsArgs = {
  data?: InputMaybe<Array<InputMaybe<ReviewsUpdateInput>>>;
};

export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};

export enum PasswordAuthErrorCode {
  Failure = "FAILURE",
  IdentityNotFound = "IDENTITY_NOT_FOUND",
  MultipleIdentityMatches = "MULTIPLE_IDENTITY_MATCHES",
  SecretMismatch = "SECRET_MISMATCH",
  SecretNotSet = "SECRET_NOT_SET",
}

/**  A keystone list  */
export type Product = {
  __typename?: "Product";
  _reviewsMeta?: Maybe<_QueryMeta>;
  category?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  photo?: Maybe<ProductImage>;
  price?: Maybe<Scalars["String"]>;
  reviews: Array<Review>;
  title?: Maybe<Scalars["String"]>;
};

/**  A keystone list  */
export type Product_ReviewsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortReviewsBy>>;
  where?: InputMaybe<ReviewWhereInput>;
};

/**  A keystone list  */
export type ProductReviewsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortReviewsBy>>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ProductCreateInput = {
  category?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<ProductImageRelateToOneInput>;
  price?: InputMaybe<Scalars["String"]>;
  reviews?: InputMaybe<ReviewRelateToManyInput>;
  title?: InputMaybe<Scalars["String"]>;
};

/**  A keystone list  */
export type ProductImage = {
  __typename?: "ProductImage";
  altText?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<CloudinaryImage_File>;
  product?: Maybe<Product>;
};

export type ProductImageCreateInput = {
  altText?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["Upload"]>;
  product?: InputMaybe<ProductRelateToOneInput>;
};

export type ProductImageRelateToOneInput = {
  connect?: InputMaybe<ProductImageWhereUniqueInput>;
  create?: InputMaybe<ProductImageCreateInput>;
  disconnect?: InputMaybe<ProductImageWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type ProductImageUpdateInput = {
  altText?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["Upload"]>;
  product?: InputMaybe<ProductRelateToOneInput>;
};

export type ProductImageWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProductImageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductImageWhereInput>>>;
  altText?: InputMaybe<Scalars["String"]>;
  altText_contains?: InputMaybe<Scalars["String"]>;
  altText_contains_i?: InputMaybe<Scalars["String"]>;
  altText_ends_with?: InputMaybe<Scalars["String"]>;
  altText_ends_with_i?: InputMaybe<Scalars["String"]>;
  altText_i?: InputMaybe<Scalars["String"]>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  altText_not?: InputMaybe<Scalars["String"]>;
  altText_not_contains?: InputMaybe<Scalars["String"]>;
  altText_not_contains_i?: InputMaybe<Scalars["String"]>;
  altText_not_ends_with?: InputMaybe<Scalars["String"]>;
  altText_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  altText_not_i?: InputMaybe<Scalars["String"]>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  altText_not_starts_with?: InputMaybe<Scalars["String"]>;
  altText_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  altText_starts_with?: InputMaybe<Scalars["String"]>;
  altText_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  image?: InputMaybe<Scalars["String"]>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  image_not?: InputMaybe<Scalars["String"]>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  product?: InputMaybe<ProductWhereInput>;
  product_is_null?: InputMaybe<Scalars["Boolean"]>;
};

export type ProductImageWhereUniqueInput = {
  id: Scalars["ID"];
};

export type ProductImagesCreateInput = {
  data?: InputMaybe<ProductImageCreateInput>;
};

export type ProductImagesUpdateInput = {
  data?: InputMaybe<ProductImageUpdateInput>;
  id: Scalars["ID"];
};

export type ProductRelateToOneInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
  disconnect?: InputMaybe<ProductWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type ProductUpdateInput = {
  category?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<ProductImageRelateToOneInput>;
  price?: InputMaybe<Scalars["String"]>;
  reviews?: InputMaybe<ReviewRelateToManyInput>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  category?: InputMaybe<Scalars["String"]>;
  category_contains?: InputMaybe<Scalars["String"]>;
  category_contains_i?: InputMaybe<Scalars["String"]>;
  category_ends_with?: InputMaybe<Scalars["String"]>;
  category_ends_with_i?: InputMaybe<Scalars["String"]>;
  category_i?: InputMaybe<Scalars["String"]>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  category_not?: InputMaybe<Scalars["String"]>;
  category_not_contains?: InputMaybe<Scalars["String"]>;
  category_not_contains_i?: InputMaybe<Scalars["String"]>;
  category_not_ends_with?: InputMaybe<Scalars["String"]>;
  category_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  category_not_i?: InputMaybe<Scalars["String"]>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  category_not_starts_with?: InputMaybe<Scalars["String"]>;
  category_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  category_starts_with?: InputMaybe<Scalars["String"]>;
  category_starts_with_i?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_contains_i?: InputMaybe<Scalars["String"]>;
  description_ends_with?: InputMaybe<Scalars["String"]>;
  description_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_i?: InputMaybe<Scalars["String"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_contains_i?: InputMaybe<Scalars["String"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  description_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_not_i?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  description_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  description_starts_with?: InputMaybe<Scalars["String"]>;
  description_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  photo?: InputMaybe<ProductImageWhereInput>;
  photo_is_null?: InputMaybe<Scalars["Boolean"]>;
  price?: InputMaybe<Scalars["String"]>;
  price_contains?: InputMaybe<Scalars["String"]>;
  price_contains_i?: InputMaybe<Scalars["String"]>;
  price_ends_with?: InputMaybe<Scalars["String"]>;
  price_ends_with_i?: InputMaybe<Scalars["String"]>;
  price_i?: InputMaybe<Scalars["String"]>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  price_not?: InputMaybe<Scalars["String"]>;
  price_not_contains?: InputMaybe<Scalars["String"]>;
  price_not_contains_i?: InputMaybe<Scalars["String"]>;
  price_not_ends_with?: InputMaybe<Scalars["String"]>;
  price_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  price_not_i?: InputMaybe<Scalars["String"]>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  price_not_starts_with?: InputMaybe<Scalars["String"]>;
  price_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  price_starts_with?: InputMaybe<Scalars["String"]>;
  price_starts_with_i?: InputMaybe<Scalars["String"]>;
  /**  condition must be true for all nodes  */
  reviews_every?: InputMaybe<ReviewWhereInput>;
  /**  condition must be false for all nodes  */
  reviews_none?: InputMaybe<ReviewWhereInput>;
  /**  condition must be true for at least 1 node  */
  reviews_some?: InputMaybe<ReviewWhereInput>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_contains_i?: InputMaybe<Scalars["String"]>;
  title_ends_with?: InputMaybe<Scalars["String"]>;
  title_ends_with_i?: InputMaybe<Scalars["String"]>;
  title_i?: InputMaybe<Scalars["String"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_contains_i?: InputMaybe<Scalars["String"]>;
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  title_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  title_not_i?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  title_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  title_starts_with?: InputMaybe<Scalars["String"]>;
  title_starts_with_i?: InputMaybe<Scalars["String"]>;
};

export type ProductWhereUniqueInput = {
  id: Scalars["ID"];
};

export type ProductsCreateInput = {
  data?: InputMaybe<ProductCreateInput>;
};

export type ProductsUpdateInput = {
  data?: InputMaybe<ProductUpdateInput>;
  id: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  /**  Search for the Product item with the matching ID.  */
  Product?: Maybe<Product>;
  /**  Search for the ProductImage item with the matching ID.  */
  ProductImage?: Maybe<ProductImage>;
  /**  Search for the Review item with the matching ID.  */
  Review?: Maybe<Review>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Retrieve the meta-data for the ProductImage list.  */
  _ProductImagesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Product list.  */
  _ProductsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Review list.  */
  _ReviewsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Perform a meta-query on all ProductImage items which match the where clause.  */
  _allProductImagesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Product items which match the where clause.  */
  _allProductsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Review items which match the where clause.  */
  _allReviewsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /**  Search for all ProductImage items which match the where clause.  */
  allProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Search for all Product items which match the where clause.  */
  allProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Search for all Review items which match the where clause.  */
  allReviews?: Maybe<Array<Maybe<Review>>>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars["String"]>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};

export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};

export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Query_AllProductImagesMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProductImagesBy>>;
  where?: InputMaybe<ProductImageWhereInput>;
};

export type Query_AllProductsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};

export type Query_AllReviewsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortReviewsBy>>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};

export type QueryAllProductImagesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProductImagesBy>>;
  where?: InputMaybe<ProductImageWhereInput>;
};

export type QueryAllProductsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryAllReviewsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortReviewsBy>>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

/**  A keystone list  */
export type Review = {
  __typename?: "Review";
  detailed_review?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  product?: Maybe<Product>;
  title?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type ReviewCreateInput = {
  detailed_review?: InputMaybe<Scalars["String"]>;
  product?: InputMaybe<ProductRelateToOneInput>;
  title?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type ReviewRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<ReviewWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<ReviewCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ReviewWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type ReviewUpdateInput = {
  detailed_review?: InputMaybe<Scalars["String"]>;
  product?: InputMaybe<ProductRelateToOneInput>;
  title?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ReviewWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ReviewWhereInput>>>;
  detailed_review?: InputMaybe<Scalars["String"]>;
  detailed_review_contains?: InputMaybe<Scalars["String"]>;
  detailed_review_contains_i?: InputMaybe<Scalars["String"]>;
  detailed_review_ends_with?: InputMaybe<Scalars["String"]>;
  detailed_review_ends_with_i?: InputMaybe<Scalars["String"]>;
  detailed_review_i?: InputMaybe<Scalars["String"]>;
  detailed_review_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  detailed_review_not?: InputMaybe<Scalars["String"]>;
  detailed_review_not_contains?: InputMaybe<Scalars["String"]>;
  detailed_review_not_contains_i?: InputMaybe<Scalars["String"]>;
  detailed_review_not_ends_with?: InputMaybe<Scalars["String"]>;
  detailed_review_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  detailed_review_not_i?: InputMaybe<Scalars["String"]>;
  detailed_review_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  detailed_review_not_starts_with?: InputMaybe<Scalars["String"]>;
  detailed_review_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  detailed_review_starts_with?: InputMaybe<Scalars["String"]>;
  detailed_review_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  product?: InputMaybe<ProductWhereInput>;
  product_is_null?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_contains_i?: InputMaybe<Scalars["String"]>;
  title_ends_with?: InputMaybe<Scalars["String"]>;
  title_ends_with_i?: InputMaybe<Scalars["String"]>;
  title_i?: InputMaybe<Scalars["String"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_contains_i?: InputMaybe<Scalars["String"]>;
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  title_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  title_not_i?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  title_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  title_starts_with?: InputMaybe<Scalars["String"]>;
  title_starts_with_i?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserWhereInput>;
  user_is_null?: InputMaybe<Scalars["Boolean"]>;
};

export type ReviewWhereUniqueInput = {
  id: Scalars["ID"];
};

export type ReviewsCreateInput = {
  data?: InputMaybe<ReviewCreateInput>;
};

export type ReviewsUpdateInput = {
  data?: InputMaybe<ReviewUpdateInput>;
  id: Scalars["ID"];
};

export enum SortProductImagesBy {
  AltTextAsc = "altText_ASC",
  AltTextDesc = "altText_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ProductAsc = "product_ASC",
  ProductDesc = "product_DESC",
}

export enum SortProductsBy {
  CategoryAsc = "category_ASC",
  CategoryDesc = "category_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PhotoAsc = "photo_ASC",
  PhotoDesc = "photo_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  ReviewsAsc = "reviews_ASC",
  ReviewsDesc = "reviews_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum SortReviewsBy {
  DetailedReviewAsc = "detailed_review_ASC",
  DetailedReviewDesc = "detailed_review_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ProductAsc = "product_ASC",
  ProductDesc = "product_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UserAsc = "user_ASC",
  UserDesc = "user_DESC",
}

export enum SortUsersBy {
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsAdminAsc = "isAdmin_ASC",
  IsAdminDesc = "isAdmin_DESC",
  MagicAuthIssuedAtAsc = "magicAuthIssuedAt_ASC",
  MagicAuthIssuedAtDesc = "magicAuthIssuedAt_DESC",
  MagicAuthRedeemedAtAsc = "magicAuthRedeemedAt_ASC",
  MagicAuthRedeemedAtDesc = "magicAuthRedeemedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PasswordResetIssuedAtAsc = "passwordResetIssuedAt_ASC",
  PasswordResetIssuedAtDesc = "passwordResetIssuedAt_DESC",
  PasswordResetRedeemedAtAsc = "passwordResetRedeemedAt_ASC",
  PasswordResetRedeemedAtDesc = "passwordResetRedeemedAt_DESC",
  ReviewsAsc = "reviews_ASC",
  ReviewsDesc = "reviews_DESC",
}

/**  A keystone list  */
export type User = {
  __typename?: "User";
  _reviewsMeta?: Maybe<_QueryMeta>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAdmin?: Maybe<Scalars["Boolean"]>;
  magicAuthIssuedAt?: Maybe<Scalars["String"]>;
  magicAuthRedeemedAt?: Maybe<Scalars["String"]>;
  magicAuthToken_is_set?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  passwordResetIssuedAt?: Maybe<Scalars["String"]>;
  passwordResetRedeemedAt?: Maybe<Scalars["String"]>;
  passwordResetToken_is_set?: Maybe<Scalars["Boolean"]>;
  password_is_set?: Maybe<Scalars["Boolean"]>;
  reviews: Array<Review>;
};

/**  A keystone list  */
export type User_ReviewsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortReviewsBy>>;
  where?: InputMaybe<ReviewWhereInput>;
};

/**  A keystone list  */
export type UserReviewsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortReviewsBy>>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  code: PasswordAuthErrorCode;
  message: Scalars["String"];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  item: User;
  sessionToken: Scalars["String"];
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars["String"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  reviews?: InputMaybe<ReviewRelateToManyInput>;
};

export type UserRelateToOneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<UserWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  reviews?: InputMaybe<ReviewRelateToManyInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  email?: InputMaybe<Scalars["String"]>;
  email_contains?: InputMaybe<Scalars["String"]>;
  email_contains_i?: InputMaybe<Scalars["String"]>;
  email_ends_with?: InputMaybe<Scalars["String"]>;
  email_ends_with_i?: InputMaybe<Scalars["String"]>;
  email_i?: InputMaybe<Scalars["String"]>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email_not?: InputMaybe<Scalars["String"]>;
  email_not_contains?: InputMaybe<Scalars["String"]>;
  email_not_contains_i?: InputMaybe<Scalars["String"]>;
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  email_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  email_not_i?: InputMaybe<Scalars["String"]>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  email_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  email_starts_with?: InputMaybe<Scalars["String"]>;
  email_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  isAdmin_not?: InputMaybe<Scalars["Boolean"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_gt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_gte?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthIssuedAt_lt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_lte?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_not?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_gt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_gte?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthRedeemedAt_lt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_lte?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_not?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthToken_is_set?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_gt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_gte?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetIssuedAt_lt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_lte?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_not?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_gt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_gte?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetRedeemedAt_lt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_lte?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_not?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetToken_is_set?: InputMaybe<Scalars["Boolean"]>;
  password_is_set?: InputMaybe<Scalars["Boolean"]>;
  /**  condition must be true for all nodes  */
  reviews_every?: InputMaybe<ReviewWhereInput>;
  /**  condition must be false for all nodes  */
  reviews_none?: InputMaybe<ReviewWhereInput>;
  /**  condition must be true for at least 1 node  */
  reviews_some?: InputMaybe<ReviewWhereInput>;
};

export type UserWhereUniqueInput = {
  id: Scalars["ID"];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars["ID"];
};

export type _ListAccess = {
  __typename?: "_ListAccess";
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars["Boolean"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars["JSON"]>;
};

export type _ListInputTypes = {
  __typename?: "_ListInputTypes";
  /** Create mutation input type name */
  createInput?: Maybe<Scalars["String"]>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars["String"]>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars["String"]>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars["String"]>;
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars["String"]>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars["String"]>;
};

export type _ListMeta = {
  __typename?: "_ListMeta";
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** The list's user-facing description */
  description?: Maybe<Scalars["String"]>;
  /** The Keystone list key */
  key?: Maybe<Scalars["String"]>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars["String"]>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The list's data path */
  path?: Maybe<Scalars["String"]>;
  /** The list's plural display name */
  plural?: Maybe<Scalars["String"]>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
  /** The list's singular display name */
  singular?: Maybe<Scalars["String"]>;
};

export type _ListMutations = {
  __typename?: "_ListMutations";
  /** Create mutation name */
  create?: Maybe<Scalars["String"]>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars["String"]>;
  /** Delete mutation name */
  delete?: Maybe<Scalars["String"]>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars["String"]>;
  /** Update mutation name */
  update?: Maybe<Scalars["String"]>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars["String"]>;
};

export type _ListQueries = {
  __typename?: "_ListQueries";
  /** Single-item query name */
  item?: Maybe<Scalars["String"]>;
  /** All-items query name */
  list?: Maybe<Scalars["String"]>;
  /** List metadata query name */
  meta?: Maybe<Scalars["String"]>;
};

export type _ListSchema = {
  __typename?: "_ListSchema";
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: "_ListSchemaFields";
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The path of the field in its list */
  path?: Maybe<Scalars["String"]>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars["String"]>;
};

export type _ListSchemaRelatedFields = {
  __typename?: "_ListSchemaRelatedFields";
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
};

export type _QueryMeta = {
  __typename?: "_QueryMeta";
  count?: Maybe<Scalars["Int"]>;
};

export type _KsListsMetaInput = {
  /** Whether this is an auxiliary helper list */
  auxiliary?: InputMaybe<Scalars["Boolean"]>;
  key?: InputMaybe<Scalars["String"]>;
};

export type AllProductsQueryVariables = Exact<{ [key: string]: never }>;

export type AllProductsQuery = {
  __typename?: "Query";
  allProducts?: Array<{
    __typename?: "Product";
    id: string;
    title?: string | null;
    description?: string | null;
    category?: string | null;
    price?: string | null;
    reviews: Array<{ __typename?: "Review"; id: string; title?: string | null; detailed_review?: string | null }>;
    photo?: {
      __typename?: "ProductImage";
      id: string;
      altText?: string | null;
      image?: { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null } | null;
    } | null;
  } | null> | null;
};

export type AllProductsCountQueryVariables = Exact<{ [key: string]: never }>;

export type AllProductsCountQuery = {
  __typename?: "Query";
  _allProductsMeta?: { __typename?: "_QueryMeta"; count?: number | null } | null;
};

export type CreateProductMutationVariables = Exact<{
  name: Scalars["String"];
  description: Scalars["String"];
  price: Scalars["String"];
  image: Scalars["Upload"];
}>;

export type CreateProductMutation = {
  __typename?: "Mutation";
  createProduct?: { __typename?: "Product"; id: string; title?: string | null } | null;
};

export type ProductQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type ProductQuery = {
  __typename?: "Query";
  Product?: {
    __typename?: "Product";
    id: string;
    title?: string | null;
    description?: string | null;
    price?: string | null;
    category?: string | null;
    reviews: Array<{
      __typename?: "Review";
      id: string;
      title?: string | null;
      detailed_review?: string | null;
      user?: { __typename?: "User"; id: string; name?: string | null } | null;
    }>;
    photo?: {
      __typename?: "ProductImage";
      altText?: string | null;
      image?: { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null } | null;
    } | null;
  } | null;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: "Query";
  authenticatedItem?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email?: string | null;
    isAdmin?: boolean | null;
    reviews: Array<{ __typename?: "Review"; id: string; title?: string | null; detailed_review?: string | null }>;
  } | null;
};

export type SearchProductsQueryVariables = Exact<{
  searchTerm: Scalars["String"];
}>;

export type SearchProductsQuery = {
  __typename?: "Query";
  searchTerms?: Array<{
    __typename?: "Product";
    id: string;
    title?: string | null;
    photo?: {
      __typename?: "ProductImage";
      image?: { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null } | null;
    } | null;
  } | null> | null;
};

export type SignInMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword:
    | { __typename?: "UserAuthenticationWithPasswordFailure"; message: string }
    | {
        __typename?: "UserAuthenticationWithPasswordSuccess";
        item: { __typename?: "User"; id: string; email?: string | null; name?: string | null };
      };
};

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = { __typename?: "Mutation"; endSession: boolean };

export type SignUpMutationVariables = Exact<{
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  createUser?: { __typename?: "User"; id: string; email?: string | null; name?: string | null } | null;
};

export const AllProductsDocument = gql`
  query allProducts {
    allProducts {
      id
      title
      description
      category
      price
      reviews {
        id
        title
        detailed_review
      }
      photo {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
}
export function useAllProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
}
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export function refetchAllProductsQuery(variables?: AllProductsQueryVariables) {
  return { query: AllProductsDocument, variables: variables };
}
export const AllProductsCountDocument = gql`
  query allProductsCount {
    _allProductsMeta {
      count
    }
  }
`;

/**
 * __useAllProductsCountQuery__
 *
 * To run a query within a React component, call `useAllProductsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsCountQuery(
  baseOptions?: Apollo.QueryHookOptions<AllProductsCountQuery, AllProductsCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProductsCountQuery, AllProductsCountQueryVariables>(AllProductsCountDocument, options);
}
export function useAllProductsCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllProductsCountQuery, AllProductsCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProductsCountQuery, AllProductsCountQueryVariables>(AllProductsCountDocument, options);
}
export type AllProductsCountQueryHookResult = ReturnType<typeof useAllProductsCountQuery>;
export type AllProductsCountLazyQueryHookResult = ReturnType<typeof useAllProductsCountLazyQuery>;
export type AllProductsCountQueryResult = Apollo.QueryResult<AllProductsCountQuery, AllProductsCountQueryVariables>;
export function refetchAllProductsCountQuery(variables?: AllProductsCountQueryVariables) {
  return { query: AllProductsCountDocument, variables: variables };
}
export const CreateProductDocument = gql`
  mutation createProduct($name: String!, $description: String!, $price: String!, $image: Upload!) {
    createProduct(
      data: {
        title: $name
        description: $description
        price: $price
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      title
    }
  }
`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const ProductDocument = gql`
  query Product($id: ID!) {
    Product(where: { id: $id }) {
      id
      title
      description
      reviews {
        id
        title
        detailed_review
        user {
          id
          name
        }
      }
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
      price
      category
    }
  }
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export function refetchProductQuery(variables: ProductQueryVariables) {
  return { query: ProductDocument, variables: variables };
}
export const UserDocument = gql`
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        email
        isAdmin
        reviews {
          id
          title
          detailed_review
        }
      }
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables?: UserQueryVariables) {
  return { query: UserDocument, variables: variables };
}
export const SearchProductsDocument = gql`
  query searchProducts($searchTerm: String!) {
    searchTerms: allProducts(
      where: { OR: [{ title_contains_i: $searchTerm }, { description_contains_i: $searchTerm }] }
    ) {
      id
      title
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSearchProductsQuery(
  baseOptions: Apollo.QueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
}
export function useSearchProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
}
export type SearchProductsQueryHookResult = ReturnType<typeof useSearchProductsQuery>;
export type SearchProductsLazyQueryHookResult = ReturnType<typeof useSearchProductsLazyQuery>;
export type SearchProductsQueryResult = Apollo.QueryResult<SearchProductsQuery, SearchProductsQueryVariables>;
export function refetchSearchProductsQuery(variables: SearchProductsQueryVariables) {
  return { query: SearchProductsDocument, variables: variables };
}
export const SignInDocument = gql`
  mutation signIn($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
  mutation signOut {
    endSession
  }
`;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const SignUpDocument = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      email
      name
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export type CloudinaryImage_FileKeySpecifier = (
  | "encoding"
  | "filename"
  | "id"
  | "mimetype"
  | "originalFilename"
  | "path"
  | "publicUrl"
  | "publicUrlTransformed"
  | CloudinaryImage_FileKeySpecifier
)[];
export type CloudinaryImage_FileFieldPolicy = {
  encoding?: FieldPolicy<any> | FieldReadFunction<any>;
  filename?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  mimetype?: FieldPolicy<any> | FieldReadFunction<any>;
  originalFilename?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  publicUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  publicUrlTransformed?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminMetaKeySpecifier = (
  | "enableSessionItem"
  | "enableSignout"
  | "list"
  | "lists"
  | KeystoneAdminMetaKeySpecifier
)[];
export type KeystoneAdminMetaFieldPolicy = {
  enableSessionItem?: FieldPolicy<any> | FieldReadFunction<any>;
  enableSignout?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  lists?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaKeySpecifier = (
  | "createView"
  | "customViewsHash"
  | "fieldMeta"
  | "isOrderable"
  | "itemView"
  | "label"
  | "listView"
  | "path"
  | "viewsHash"
  | KeystoneAdminUIFieldMetaKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
  createView?: FieldPolicy<any> | FieldReadFunction<any>;
  customViewsHash?: FieldPolicy<any> | FieldReadFunction<any>;
  fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  isOrderable?: FieldPolicy<any> | FieldReadFunction<any>;
  itemView?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  listView?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  viewsHash?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaCreateViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaCreateViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaItemViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaItemViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaItemViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaListViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaListViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaListViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIListMetaKeySpecifier = (
  | "description"
  | "fields"
  | "hideCreate"
  | "hideDelete"
  | "initialColumns"
  | "initialSort"
  | "isHidden"
  | "itemQueryName"
  | "key"
  | "label"
  | "labelField"
  | "listQueryName"
  | "pageSize"
  | "path"
  | "plural"
  | "singular"
  | KeystoneAdminUIListMetaKeySpecifier
)[];
export type KeystoneAdminUIListMetaFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  hideCreate?: FieldPolicy<any> | FieldReadFunction<any>;
  hideDelete?: FieldPolicy<any> | FieldReadFunction<any>;
  initialColumns?: FieldPolicy<any> | FieldReadFunction<any>;
  initialSort?: FieldPolicy<any> | FieldReadFunction<any>;
  isHidden?: FieldPolicy<any> | FieldReadFunction<any>;
  itemQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelField?: FieldPolicy<any> | FieldReadFunction<any>;
  listQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  pageSize?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUISortKeySpecifier = ("direction" | "field" | KeystoneAdminUISortKeySpecifier)[];
export type KeystoneAdminUISortFieldPolicy = {
  direction?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneMetaKeySpecifier = ("adminMeta" | KeystoneMetaKeySpecifier)[];
export type KeystoneMetaFieldPolicy = {
  adminMeta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | "authenticateUserWithPassword"
  | "createInitialUser"
  | "createProduct"
  | "createProductImage"
  | "createProductImages"
  | "createProducts"
  | "createReview"
  | "createReviews"
  | "createUser"
  | "createUsers"
  | "deleteProduct"
  | "deleteProductImage"
  | "deleteProductImages"
  | "deleteProducts"
  | "deleteReview"
  | "deleteReviews"
  | "deleteUser"
  | "deleteUsers"
  | "endSession"
  | "updateProduct"
  | "updateProductImage"
  | "updateProductImages"
  | "updateProducts"
  | "updateReview"
  | "updateReviews"
  | "updateUser"
  | "updateUsers"
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  authenticateUserWithPassword?: FieldPolicy<any> | FieldReadFunction<any>;
  createInitialUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createProduct?: FieldPolicy<any> | FieldReadFunction<any>;
  createProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  createProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  createProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  createReview?: FieldPolicy<any> | FieldReadFunction<any>;
  createReviews?: FieldPolicy<any> | FieldReadFunction<any>;
  createUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteReview?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteReviews?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  endSession?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProduct?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  updateReview?: FieldPolicy<any> | FieldReadFunction<any>;
  updateReviews?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUsers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProductKeySpecifier = (
  | "_reviewsMeta"
  | "category"
  | "description"
  | "id"
  | "photo"
  | "price"
  | "reviews"
  | "title"
  | ProductKeySpecifier
)[];
export type ProductFieldPolicy = {
  _reviewsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
  price?: FieldPolicy<any> | FieldReadFunction<any>;
  reviews?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProductImageKeySpecifier = ("altText" | "id" | "image" | "product" | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
  altText?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  product?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "Product"
  | "ProductImage"
  | "Review"
  | "User"
  | "_ProductImagesMeta"
  | "_ProductsMeta"
  | "_ReviewsMeta"
  | "_UsersMeta"
  | "_allProductImagesMeta"
  | "_allProductsMeta"
  | "_allReviewsMeta"
  | "_allUsersMeta"
  | "_ksListsMeta"
  | "allProductImages"
  | "allProducts"
  | "allReviews"
  | "allUsers"
  | "appVersion"
  | "authenticatedItem"
  | "keystone"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  Product?: FieldPolicy<any> | FieldReadFunction<any>;
  ProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  Review?: FieldPolicy<any> | FieldReadFunction<any>;
  User?: FieldPolicy<any> | FieldReadFunction<any>;
  _ProductImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ProductsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ReviewsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _UsersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allProductImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allProductsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allReviewsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allUsersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ksListsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  allProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  allProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  allReviews?: FieldPolicy<any> | FieldReadFunction<any>;
  allUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  appVersion?: FieldPolicy<any> | FieldReadFunction<any>;
  authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>;
  keystone?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReviewKeySpecifier = ("detailed_review" | "id" | "product" | "title" | "user" | ReviewKeySpecifier)[];
export type ReviewFieldPolicy = {
  detailed_review?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  product?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | "_reviewsMeta"
  | "email"
  | "id"
  | "isAdmin"
  | "magicAuthIssuedAt"
  | "magicAuthRedeemedAt"
  | "magicAuthToken_is_set"
  | "name"
  | "passwordResetIssuedAt"
  | "passwordResetRedeemedAt"
  | "passwordResetToken_is_set"
  | "password_is_set"
  | "reviews"
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  _reviewsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isAdmin?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  password_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  reviews?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = (
  | "code"
  | "message"
  | UserAuthenticationWithPasswordFailureKeySpecifier
)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordSuccessKeySpecifier = (
  | "item"
  | "sessionToken"
  | UserAuthenticationWithPasswordSuccessKeySpecifier
)[];
export type UserAuthenticationWithPasswordSuccessFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  sessionToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListAccessKeySpecifier = ("auth" | "create" | "delete" | "read" | "update" | _ListAccessKeySpecifier)[];
export type _ListAccessFieldPolicy = {
  auth?: FieldPolicy<any> | FieldReadFunction<any>;
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  delete?: FieldPolicy<any> | FieldReadFunction<any>;
  read?: FieldPolicy<any> | FieldReadFunction<any>;
  update?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListInputTypesKeySpecifier = (
  | "createInput"
  | "createManyInput"
  | "updateInput"
  | "updateManyInput"
  | "whereInput"
  | "whereUniqueInput"
  | _ListInputTypesKeySpecifier
)[];
export type _ListInputTypesFieldPolicy = {
  createInput?: FieldPolicy<any> | FieldReadFunction<any>;
  createManyInput?: FieldPolicy<any> | FieldReadFunction<any>;
  updateInput?: FieldPolicy<any> | FieldReadFunction<any>;
  updateManyInput?: FieldPolicy<any> | FieldReadFunction<any>;
  whereInput?: FieldPolicy<any> | FieldReadFunction<any>;
  whereUniqueInput?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListMetaKeySpecifier = (
  | "access"
  | "description"
  | "key"
  | "label"
  | "name"
  | "path"
  | "plural"
  | "schema"
  | "singular"
  | _ListMetaKeySpecifier
)[];
export type _ListMetaFieldPolicy = {
  access?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListMutationsKeySpecifier = (
  | "create"
  | "createMany"
  | "delete"
  | "deleteMany"
  | "update"
  | "updateMany"
  | _ListMutationsKeySpecifier
)[];
export type _ListMutationsFieldPolicy = {
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  createMany?: FieldPolicy<any> | FieldReadFunction<any>;
  delete?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteMany?: FieldPolicy<any> | FieldReadFunction<any>;
  update?: FieldPolicy<any> | FieldReadFunction<any>;
  updateMany?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListQueriesKeySpecifier = ("item" | "list" | "meta" | _ListQueriesKeySpecifier)[];
export type _ListQueriesFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaKeySpecifier = (
  | "fields"
  | "inputTypes"
  | "mutations"
  | "queries"
  | "relatedFields"
  | "type"
  | _ListSchemaKeySpecifier
)[];
export type _ListSchemaFieldPolicy = {
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  inputTypes?: FieldPolicy<any> | FieldReadFunction<any>;
  mutations?: FieldPolicy<any> | FieldReadFunction<any>;
  queries?: FieldPolicy<any> | FieldReadFunction<any>;
  relatedFields?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaFieldsKeySpecifier = ("name" | "path" | "type" | _ListSchemaFieldsKeySpecifier)[];
export type _ListSchemaFieldsFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaRelatedFieldsKeySpecifier = ("fields" | "type" | _ListSchemaRelatedFieldsKeySpecifier)[];
export type _ListSchemaRelatedFieldsFieldPolicy = {
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _QueryMetaKeySpecifier = ("count" | _QueryMetaKeySpecifier)[];
export type _QueryMetaFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  CloudinaryImage_File?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | CloudinaryImage_FileKeySpecifier | (() => undefined | CloudinaryImage_FileKeySpecifier);
    fields?: CloudinaryImage_FileFieldPolicy;
  };
  KeystoneAdminMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminMetaKeySpecifier | (() => undefined | KeystoneAdminMetaKeySpecifier);
    fields?: KeystoneAdminMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUIFieldMetaKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMetaCreateView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaCreateViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaCreateViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaItemView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaItemViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaItemViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaItemViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaListView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaListViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaListViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaListViewFieldPolicy;
  };
  KeystoneAdminUIListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUIListMetaKeySpecifier | (() => undefined | KeystoneAdminUIListMetaKeySpecifier);
    fields?: KeystoneAdminUIListMetaFieldPolicy;
  };
  KeystoneAdminUISort?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUISortKeySpecifier | (() => undefined | KeystoneAdminUISortKeySpecifier);
    fields?: KeystoneAdminUISortFieldPolicy;
  };
  KeystoneMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneMetaKeySpecifier | (() => undefined | KeystoneMetaKeySpecifier);
    fields?: KeystoneMetaFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier);
    fields?: ProductFieldPolicy;
  };
  ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier);
    fields?: ProductImageFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  Review?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ReviewKeySpecifier | (() => undefined | ReviewKeySpecifier);
    fields?: ReviewFieldPolicy;
  };
  User?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
  UserAuthenticationWithPasswordFailure?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordFailureKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordFailureKeySpecifier);
    fields?: UserAuthenticationWithPasswordFailureFieldPolicy;
  };
  UserAuthenticationWithPasswordSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordSuccessKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordSuccessKeySpecifier);
    fields?: UserAuthenticationWithPasswordSuccessFieldPolicy;
  };
  _ListAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListAccessKeySpecifier | (() => undefined | _ListAccessKeySpecifier);
    fields?: _ListAccessFieldPolicy;
  };
  _ListInputTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListInputTypesKeySpecifier | (() => undefined | _ListInputTypesKeySpecifier);
    fields?: _ListInputTypesFieldPolicy;
  };
  _ListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListMetaKeySpecifier | (() => undefined | _ListMetaKeySpecifier);
    fields?: _ListMetaFieldPolicy;
  };
  _ListMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListMutationsKeySpecifier | (() => undefined | _ListMutationsKeySpecifier);
    fields?: _ListMutationsFieldPolicy;
  };
  _ListQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListQueriesKeySpecifier | (() => undefined | _ListQueriesKeySpecifier);
    fields?: _ListQueriesFieldPolicy;
  };
  _ListSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListSchemaKeySpecifier | (() => undefined | _ListSchemaKeySpecifier);
    fields?: _ListSchemaFieldPolicy;
  };
  _ListSchemaFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListSchemaFieldsKeySpecifier | (() => undefined | _ListSchemaFieldsKeySpecifier);
    fields?: _ListSchemaFieldsFieldPolicy;
  };
  _ListSchemaRelatedFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListSchemaRelatedFieldsKeySpecifier | (() => undefined | _ListSchemaRelatedFieldsKeySpecifier);
    fields?: _ListSchemaRelatedFieldsFieldPolicy;
  };
  _QueryMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _QueryMetaKeySpecifier | (() => undefined | _QueryMetaKeySpecifier);
    fields?: _QueryMetaFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
