rm(list = ls())
setwd("C:\\Users\\EK\\Documents\\web\\react\\blog\\shapefiles")

library(rgdal)


countries <- readOGR("C:\\Users\\EK\\Documents\\web\\react\\blog\\shapefiles", "ne_50m_admin_0_countries")


# get coordinates
b <- bbox(countries)

# create a box with desired subset
b[2,2] <- 29.5
b[2,1] <- 0
b[1,1] <- 75
b[1,2] <- 150

plot(countries, xlim = b[1, ], ylim = b[2, ])

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
( pid <- sapply(slot(asia, "polygons"), function(x) slot(x, "ID")) )
# Create dataframe with correct rownames
( p.df <- data.frame( ID=1:length(asia), row.names = pid) )  
# add country names
p.df$country <- NA
p.df$country[1] <- "Vietnam"
p.df$country[2] <- "Thailand"
p.df$country[4] <- "Philippines"
p.df$country[6] <- "Laos"
p.df$country[12] <- "Cambodia"

# Try coersion again and check class
asia2 <- SpatialPolygonsDataFrame(asia, p.df)

test <- asia2[which(asia2$country=="Cambodia"),]
plot(test)

writeOGR(asia2, "C:\\Users\\EK\\Documents\\web\\react\\blog\\shapefiles", "asia_frame", driver="ESRI Shapefile")

## Laos
vietnam <- asia2[which(asia2$country=="Vietnam"),]
laos <- asia2[which(asia2$country=="Laos"),]
thailand <- asia2[which(asia2$country=="Thailand"),]
philippines <- asia2[which(asia2$country=="Philippines"),]
cambodia <- asia2[which(asia2$country=="Cambodia"),]


writeOGR(vietnam, "C:\\Users\\EK\\Documents\\web\\react\\blog\\shapefiles", "vietnam", driver="ESRI Shapefile")
writeOGR(laos, "C:\\Users\\EK\\Documents\\web\\react\\blog\\shapefiles", "laos", driver="ESRI Shapefile")
writeOGR(thailand, "C:\\Users\\EK\\Documents\\web\\react\\blog\\shapefiles", "thailand", driver="ESRI Shapefile")
writeOGR(philippines, "C:\\Users\\EK\\Documents\\web\\react\\blog\\shapefiles", "philippines", driver="ESRI Shapefile")
writeOGR(cambodia, "C:\\Users\\EK\\Documents\\web\\react\\blog\\shapefiles", "cambodia", driver="ESRI Shapefile")
