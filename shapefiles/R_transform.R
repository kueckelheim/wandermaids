# transform created shapefiles into svg files on https://mapshaper.org/
# export as topo json

rm(list = ls())
setwd("C:\\Users\\EK\\Documents\\web\\wandermaids\\shapefiles")

library(rgdal)


countries <- readOGR("C:\\Users\\EK\\Documents\\web\\wandermaids\\shapefiles", "ne_50m_admin_0_countries")


# get coordinates
b <- bbox(countries)

# create a box with desired subset
# b[2,2] <- 29.5
# b[2,1] <- 0
# b[1,1] <- 75
# b[1,2] <- 150

plot(countries)
writeOGR(countries, "C:\\Users\\EK\\Documents\\web\\wandermaids\\shapefiles", "world", driver="ESRI Shapefile")
# clip subselection

library(raster)
library(rgeos)

gClip <- function(shp, bb){
  if(class(bb) == "matrix") b_poly <- as(extent(as.vector(t(bb))), "SpatialPolygons")
  else b_poly <- as(extent(bb), "SpatialPolygons")
  gIntersection(shp, b_poly, byid = T)
}

asia <- gClip(countries, b)

# Extract polygon ID's
( pid <- sapply(slot(countries, "polygons"), function(x) slot(x, "ID")) )
# Create dataframe with correct rownames
( p.df <- data.frame( ID=1:length(countries), row.names = pid) )  
# add country names
p.df$country <- NA
p.df$country[4] <- "Vietnam"
p.df$country[82] <- "Peru"
p.df$country[94] <- "New Zealand"
p.df$country[17] <- "USA"
p.df$country[128] <- "Laos"
p.df$country[157] <- "Germany"

# Try coersion again and check class
country2 <- SpatialPolygonsDataFrame(countries, p.df)

test <- country2[which(country2$country=="Germany"),]
plot(test)

# writeOGR(asia2, "C:\\Users\\EK\\Documents\\web\\react\\blog\\shapefiles", "asia_frame", driver="ESRI Shapefile")

## Laos
vietnam <- country2[which(country2$country=="Vietnam"),]
laos <- country2[which(country2$country=="Laos"),]
peru <- country2[which(country2$country=="Peru"),]
new_zealand <- country2[which(country2$country=="New Zealand"),]
usa <- country2[which(country2$country=="USA"),]
ger <- country2[which(country2$country=="Germany"),]


writeOGR(vietnam, "C:\\Users\\EK\\Documents\\web\\wandermaids\\shapefiles", "vietnam", driver="ESRI Shapefile")
writeOGR(laos, "C:\\Users\\EK\\Documents\\web\\wandermaids\\shapefiles", "laos", driver="ESRI Shapefile")
writeOGR(peru, "C:\\Users\\EK\\Documents\\web\\wandermaids\\shapefiles", "peru", driver="ESRI Shapefile")
writeOGR(new_zealand, "C:\\Users\\EK\\Documents\\web\\wandermaids\\shapefiles", "new_zealand", driver="ESRI Shapefile")
writeOGR(usa, "C:\\Users\\EK\\Documents\\web\\wandermaids\\shapefiles", "usa", driver="ESRI Shapefile")
writeOGR(ger, "C:\\Users\\EK\\Documents\\web\\wandermaids\\shapefiles", "germany", driver="ESRI Shapefile")
