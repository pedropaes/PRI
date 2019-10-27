<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="arqs/index.html">
            <html>
                <head>
                    <title>Arquivo Arqueossítios de Portugal</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                    <meta charset="UTF-8"/>
                </head>
                <body>
                    <h1>Arquivo Arqueossítios de Portugal</h1>
                    <ol>
                        <xsl:apply-templates/>
                    </ol>
                </body>
            </html>    
        </xsl:result-document>
        <xsl:apply-templates mode="individual"/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="individual">
        <xsl:result-document href="arqs/{generate-id()}.html">
            <html>
                <head>
                    <title>Arquivo Sonoro: Página Individual</title>
                    <meta charset="UTF-8"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                </head>
                <body>
                    <h1><xsl:value-of select="replace(IDENTI,';', ' - ')"/></h1>
                    <table class="table table-bordered">
                        <tr>
                            <td><img src="{IMAGEM/@NOME}" alt="{replace(IDENTI,';', ' - ')}"/></td>
                        </tr>
                        <tr>
                            <th>Descrição</th><td><xsl:value-of select="DESCRI"/></td>
                        </tr>
                        <tr>
                            <th>Cronologia</th><td><xsl:value-of select="CRONO"/></td>
                        </tr>
                        <tr>
                            <th>Lugar</th><td><xsl:value-of select="LUGAR"/></td>
                        </tr>
                        <tr>
                            <th>Freguesia</th><td><xsl:value-of select="FREGUE"/></td>
                        </tr>
                        <tr>
                            <th>Concelho</th><td><xsl:value-of select="CONCEL"/></td>
                        </tr>
                        
                        <xsl:apply-templates mode="individual" select="CODADM"/>
                        
                        <tr>
                            <th>Latitude</th><td><xsl:value-of select="LATITU"/></td>
                        </tr>
                        <tr>
                            <th>Longitude</th><td><xsl:value-of select="LONGIT"/></td>
                        </tr>
                        <tr>
                            <th>Altitude</th><td><xsl:value-of select="ALTITU"/></td>
                        </tr>
                        <tr>
                            <th>Acesso</th><td><xsl:value-of select="ACESSO"/></td>
                        </tr>
                       
                         <xsl:apply-templates mode="individual" select="QUADRO"/>
                       
                        <xsl:apply-templates mode="individual" select="TRAARQ"/>
                        
                        <tr>
                            <th>Descrição</th><td><xsl:value-of select="DESARQ"/></td>
                        </tr>
                        
                        <xsl:apply-templates mode="individual" select="INTERP"/>
                        
                        <xsl:apply-templates mode="individual" select="DEPOSI"/>
                        
                        <xsl:apply-templates mode="individual" select="INTERE"/>
                        
                        <tr>
                            <th>Bibliografia</th>
                            <td><xsl:apply-templates mode="individual" select="BIBLIO"/></td>
                        </tr>
                        <tr>
                            <th>Autor</th>
                            <td><xsl:value-of select="AUTOR"/></td>
                        </tr>
                        <tr>
                            <th>Data</th>
                            <td><xsl:value-of select="DATA"/></td>
                        </tr>
                        
                    </table>
                    <hr width="40%"/>
                    <address>
                        <a href="index.html#{generate-id()}">Voltar ao Índice</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="BIBLIO" mode="individual" >
        
        <p><i><xsl:value-of select="."/></i></p>
        
    </xsl:template>
    
    <xsl:template match="QUADRO" mode="individual" >
        
        <tr>
            <th>Quadro</th><td><xsl:value-of select="."/></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="CODADM" mode="individual" >
        
        <tr>
            <th>Código</th><td><xsl:value-of select="."/></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="DEPOSI" mode="individual" >
        
        <tr>
            <th>Depósito</th><td><xsl:value-of select="."/></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="INTERE" mode="individual" >
        
        <tr>
            <th>Interesse</th><td><xsl:value-of select="."/></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="INTERP" mode="individual" >
        
        <tr>
            <th>Interesse Patrimonial</th><td><xsl:value-of select="."/></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="TRAARQ" mode="individual" >
        
        <tr>
            <th>Trabalhos</th><td><xsl:value-of select="."/></td>
        </tr>
        
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <li id="{generate-id()}">
            <a href="{generate-id()}.html"><xsl:value-of select="replace(IDENTI,';', ' - ')"/></a>
        </li>
    </xsl:template>
</xsl:stylesheet>
