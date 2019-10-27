<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    <xsl:template match="doc">
        <html>
            <head>
                <title><xsl:value-of select="./tit"/></title>
                <link rel="stylesheet" href="/w3.css"/>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <div class="w3-container w3-half">
                  
        
                    <table class="w3-table w3-striped">
                        <tr>
                            <th><img src="../music.png" alt="{tit}" height="50" width="50"/></th><td> <h1><xsl:value-of select="tit"/></h1></td>
                        </tr>
                        <xsl:apply-templates/>
                    </table>
                </div>
            </body>
        </html> 
    </xsl:template>
    
    <xsl:template match="tit">

    </xsl:template>
    
    
    <xsl:template match="prov" >
        
        <tr>
            <th>Provincia:</th><td><xsl:value-of select="."/></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="local" >
        
        <tr>
            <th>Local:</th><td><xsl:value-of select="."/></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="musico" >
        
        <tr>
            <th>Músico:</th><td><xsl:value-of select="."/></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="/doc/file" >
        
        <tr>
            <th>Ficheiro:</th><td><a href="{.}"><xsl:value-of select="@t"/></a></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="obs" >
        
        <tr>
            <th>Observações:</th><td><xsl:value-of select="obs"/><xsl:apply-templates/></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="/doc/obs/file" >
        
       <a href="{.}"><xsl:value-of select="@t"/></a>
        
    </xsl:template>
    
    <xsl:template match="/doc/obs/intxt" >
        
       <xsl:value-of select="."/>
        
    </xsl:template>
    
    <xsl:template match="duracao" >
        <tr>
            <th>Duração:</th><td><xsl:value-of select="."/></td>
        </tr> 
    </xsl:template>
</xsl:stylesheet>