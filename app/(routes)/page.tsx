import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import getCategory from '@/actions/get-category';

export const revalidate = 0;

    interface HomePageProps {
      params: {
        categoryId: string;
      },

    }

    const HomePage: React.FC<HomePageProps> = async ({ 
      params, 
      
    }) => {
      const products = await getProducts({ 
        categoryId: params.categoryId,
      
      });
      const category = await getCategory(params.categoryId);
 
  

    const billboard = await getBillboard("e4ccd2be-7a13-43aa-ba34-a47f41ffc252");
    const billboard2 = await getBillboard("7e1c7deb-a87c-4b07-a83d-0e0305107474");
    
    return(
        <Container>
        <div className="space-y-10 pb-10">
          <Billboard 
            data={category.billboard}
          />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
        <div className="space-y-10 pb-10">
          <Billboard 
            data={category.billboard}
          />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>           
    );
}


export default HomePage;