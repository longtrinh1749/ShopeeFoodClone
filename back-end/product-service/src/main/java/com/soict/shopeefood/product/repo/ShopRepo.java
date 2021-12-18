package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.Shop;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShopRepo extends JpaRepository<Shop, Integer> {

    @Query(value = "select s from Shop s where s.shopId = ?1")
    Optional<Shop> findById(Integer shopId);

    @Query(value = "select s from Shop s order by s.shopId desc ")
    List<Shop> findAll();

    @Query(value = "select s from Shop s order by s.shopId desc ")
    Page<Shop> findAllByPage(Pageable pageable);

    @Query(value = "select s from Shop s where s.shopName like %:name% or s.address like %:name% order by s.shopId desc")
    Page<Shop> findByNameAndAddress(@Param("name") String name, Pageable pageable);

    @Query(value = "select s from Shop s where s.district.districtId in :districtList order by s.shopId desc ")
    Page<Shop> findByDistrict(@Param("districtList") List<Integer> districtList, Pageable pageable);

    @Query(nativeQuery = true,
            value = "select distinct (`id`), `district_id`, `name`, `img_url`, `address`, `price_range` from product_service.shop as s inner join product_service.shop_category as c \n" +
            "on s.id = c.shop_id \n" +
            "where s.district_id in :districtList and c.category_id in :catList \n" +
            "order by s.id desc ")
    Page<Shop> findByDistrictAndCategory(@Param("districtList")List<Integer> districtList,
                                         @Param("catList") List<Integer> catList,
                                         Pageable pageable);

    @Query(value = "select distinct s from Shop s join fetch ShopCategory c on s.shopId = c.shopCategoryId.shopId \n" +
                    "where c.shopCategoryId.catId in :catList \n" +
                    "order by s.shopId desc ")
    Page<Shop> findByCategory(@Param("catList") List<Integer> catList, Pageable pageable);

    @Query(nativeQuery = true,
            value = "select distinct (`id`), `district_id`, `name`, `img_url`, `address`, `price_range` from product_service.shop as s inner join product_service.shop_category as c \n" +
                    "on s.id = c.shop_id \n" +
                    "where c.category_id in :catList " +
                    "and (s.name like %:name% or s.address like %:name% ) \n" +
                    "order by s.id desc ")
    Page<Shop> findByNameAndCategory(@Param("catList") List<Integer> catList,
                                     @Param("name") String name,
                                     Pageable pageable);

    @Query(value = "select s from Shop s where s.district.districtId in :districtList and (s.shopName like %:name% or s.address like %:name%) order by s.shopId desc" )
    Page<Shop> findByNameAndDistrict(@Param("districtList") List<Integer> districtList,
                                     @Param("name") String name,
                                     Pageable pageable);

    @Query(nativeQuery = true,
            value = "select distinct (`id`), `district_id`, `name`, `img_url`, `address`, `price_range` from product_service.shop as s inner join product_service.shop_category as c \n" +
                    "on s.id = c.shop_id \n" +
                    "where s.district_id in :districtList and c.category_id in :catList " +
                    "and (s.name like %:name% or s.address like %:name% ) \n" +
                    "order by s.id desc ")
    Page<Shop> findByNameAndFilter(@Param("districtList")List<Integer> districtList,
                                   @Param("catList") List<Integer> catList,
                                   @Param("name") String name,
                                   Pageable pageable);

}
