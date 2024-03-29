import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import getComments from "@/actions/get-comment";
import SubNavbar from '@/components/subnavbar'
import Back from "@/components/back";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Comment from "@/components/ui/comment";
import CommentList from "@/components/ui/comment-list";
import { auth } from "@clerk/nextjs";

interface ProductPageProps{
    params:{
        productId:string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async({
    params
})=>{
  
 
    const product = await getProduct(params.productId);
   const suggestedProducts= await getProducts({
        categoryId: product?.category?.id
    })
    const { userId } = await auth();
    const comments = await getComments(params.productId);
            return (
              <div className="bg-gray-100">
                <Container>
                <SubNavbar/>
                    <div className="px-4">
                    <Back />
                    </div>
                
                  <div className=" bg-no-repeat px-4 py-6 sm:px-6 lg:px-8"
                   
                  >
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                      <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg">
                        <Gallery images={product?.images} />
                      </div>
                      <div className="mt-8 sm:mt-0 lg:mt-0">
                        <Info data={product} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg">
                  <div className="font-bold text-2xl px-2 py-2">
                     <h1>Vleresimi i produktit /Rating</h1>
                   </div>
                    <Comment userId={userId} />
                    <hr className="my-6" />
                  
                    <CommentList title="Komente" items={comments} />
                  </div>

                  <hr className="my-6" />

                  <div className="px-4 py-6 sm:px-6 lg:px-8">
                    <ProductList
                      title="Produkte te ngjashem"
                      items={suggestedProducts}
                    />
                  </div>
                </Container>
              </div>
            );
}

export default ProductPage;